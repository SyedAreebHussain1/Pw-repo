import { envLink } from "../../constant/contact-us-constants"


import { POST_CONTACT } from "../../constant/contact-us-constants"
import { supportForm } from "../../constant/contact-us-constants"

import { POPUP_FORM } from "../../constant/contact-us-constants"
import { MODAL_POPUP } from "../../constant/contact-us-constants"

const postContact = (data, onSuccuess, onFailur) => {
  return (dispatch) =>
    fetch(`${envLink}${supportForm}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: POST_CONTACT, payload: json })
        // console.log(json, "json data")
        if (json.message) {
          onSuccuess(json.message)
        }
      })
      .catch((error) => {
        onFailur(error.response)
        // onFailur()
      })
}

const postPopup = (data, onSuccuess, onFailur) => {
  return (dispatch) =>
    fetch(`${envLink}${POPUP_FORM}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: MODAL_POPUP, payload: json })
        // console.log(json, "json data")
        if (json.message) {
          onSuccuess(json.message)
        }
      })
      .catch((error) => {
        onFailur(error)
        // onFailur()
      })
}





export { postContact, postPopup }
//  export default postContact