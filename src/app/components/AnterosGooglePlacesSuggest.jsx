import React from 'react';
import PropTypes from 'prop-types';
import {loadScript} from 'anteros-react-core';

const loadGoogleMapApi = function (url, success, error) {
  if (window.google.maps) {
    success();
  } else {
    loadScript(url, err => {
      if (err) {
        const callback = err
          ? error
          : success;
        callback(err);
      } else {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/OverlappingMarkerSpiderfier/1.0.3/oms.min' +
            '.js',
        err2 => {
          const callback = err2
            ? error
            : success;
          callback(err2);
        })
      }
    });
  }
};

export class AnterosGooglePlacesSuggest extends React.Component {

  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.event = null;
  }

  componentDidMount() {
    loadGoogleMapApi(`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}&language=${this.props.language}&region=${this.props.region}&libraries=places`, () => {
      const {
        types = ['(cities)'],
        componentRestrictions,
        bounds
      } = this.props;
      const config = {
        types,
        bounds
      };

      if (componentRestrictions) {
        config.componentRestrictions = componentRestrictions;
      }

      this.autocomplete = new google
        .maps
        .places
        .Autocomplete(this.refs.input, config);

      this.event = this
        .autocomplete
        .addListener('place_changed', this.onSelected.bind(this));
    });

  }

  componentWillUnmount() {
    this
      .event
      .remove();
  }

  onSelected() {
    if (this.props.onPlaceSelected) {
      this
        .props
        .onPlaceSelected(this.autocomplete.getPlace());
    }
  }

  render() {
    if (!window.google.maps) 
      return <div></div>;
    else {
      const {
        onPlaceSelected,
        types,
        componentRestrictions,
        bounds,
        ...rest
      } = this.props;

      return (<input ref="input" {...rest}/>);
    }
  }
}

AnterosGooglePlacesSuggest.propTypes = {
  onPlaceSelected: PropTypes.func,
  types: PropTypes.array,
  componentRestrictions: PropTypes.object,
  bounds: PropTypes.object,
  apiKey: React.PropTypes.string.isRequired,
  language: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired
}

AnterosGooglePlacesSuggest.defaultProps = {
  language: 'pt',
  region: 'BR'
}

export class AnterosCustomGoogleAutocomplete extends React.Component {
  constructor(props) {
    super(props);

  }

  onChange(e) {
    const {
      types = ['(cities)']
    } = this.props;

    if (e.target.value) {
      this
        .service
        .getPlacePredictions({
          input: e.target.value,
          types
        }, (predictions, status) => {
          if (status === 'OK' && predictions && predictions.length > 0) {
            this
              .props
              .onOpen(predictions);
            console.log(predictions);
          } else {
            this
              .props
              .onClose();
          }
        });
    } else {
      this
        .props
        .onClose();
    }
  }

  componentDidMount() {
    loadGoogleMapApi(`https://maps.googleapis.com/maps/api/js?key=${this.props.apiKey}&language=${this.props.language}&region=${this.props.region}&libraries=places`, () => {
      if (this.props.input.value) {
        this.service = new google
          .maps
          .places
          .AutocompleteService();

        this.placeService = new google
          .maps
          .places
          .PlacesService(this.refs.div);
        this
          .placeService
          .getDetails({
            placeId: this.props.input.value
          }, (e, status) => {
            if (status === 'OK') {
              this.refs.input.value = e.formatted_address;
            }
          });
      }
    });
  }

  render() {
    if (!window.google.maps) 
      return <div></div>;
    else {
      return (
        <div>
          {React.cloneElement(this.props.input, {
            ...this.props,
            ref: 'input',
            onChange: (e) => {
              this.onChange(e);
            }
          })}
          <div ref="div"></div>
        </div>
      );
    }
  }
}

AnterosCustomGoogleAutocomplete.propTypes = {
  input: PropTypes.node.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  apiKey: React.PropTypes.string.isRequired,
  language: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired
}

AnterosCustomGoogleAutocomplete.defaultProps = {
  language: 'pt',
  region: 'BR'
}