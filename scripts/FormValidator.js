import { disableSubmitButton, popupList } from "./index.js";

class FormValidator {
  constructor(data, formElement) {
    this._formElement = formElement;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _hasInvalidInput = (inputlist) => {
    return inputlist.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputlist, buttonElement, formElement) => {
    if (this._hasInvalidInput(inputlist)) {
      disableSubmitButton(formElement);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  };

  _resetValidationErrors = (inputList) => {
    inputList.forEach((input) => {
      input.classList.remove("popup__input_type_error");
    });
    const errorsList = Array.from(
      this._formElement.querySelectorAll(".popup__error")
    );
    errorsList.forEach((error) => {
      error.classList.remove("popup__error_visible");
    });
    disableSubmitButton(this._formElement);
  };

  _setListeners = () => {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement, this._formElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement, this._formElement);
      });
    });

    popupList.forEach((popup) => {
      const closeButton = popup.querySelector(".popup__close");
      closeButton.addEventListener("click", () => {
        this._resetValidationErrors(inputList);
      });
    });
  };

  enableValidation = () => {
    this._setListeners();
  };
}

export default FormValidator;