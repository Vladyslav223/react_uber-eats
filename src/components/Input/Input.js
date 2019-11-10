/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Input.scss';

export const tra = 'tra';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
      isSmall,
      label,
    } = this.props;
    const { isFocused } = this.state;

    const inputWrapperClass = cx('control', {
      'control__input-wrapper--focused': isFocused,
      [className]: !!className,
    });

    const inputClass = cx('control__input', {
      'control__input--small': isSmall,
      'control__input--time': type === 'time',
    });

    return (
      <label className="control">
        {label && (
          <p className="control__label">
            {label}
          </p>
        )}
        <div className={inputWrapperClass}>
          {!!iconUrl && (
            <img
              src={iconUrl}
              alt={placeholder}
              className="control__icon"
            />
          )}
          <input
            ref={this.inputRef}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            name={name}
            placeholder={placeholder}
            className={inputClass}
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  iconUrl: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  isSmall: PropTypes.bool,
};

Input.defaultProps = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
  label: '',
};
