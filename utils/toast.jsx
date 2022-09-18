import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"

export const updateToast = (toastPayload) => {
  toast(toastPayload.render, toastPayload)
}

export const initToast = () => {
  return
}

export const toastFlashMessage = (flashMessage) => {
  if (flashMessage?.type === "success") {
    toast.success(flashMessage?.message, {
      draggable: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  } else if (flashMessage?.type === "error") {
    toast.error(flashMessage?.message, {
      draggable: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  } else {
    toast(flashMessage?.message, {
      draggable: true,
      position: toast.POSITION.BOTTOM_RIGHT,
    })
  }
}
