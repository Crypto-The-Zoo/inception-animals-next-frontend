import React from "react"
import { toast } from "react-toastify"

function ToastHelper() {
  const toastId = React.useRef(null)

  const notify = () => (toastId.current = toast("Hello", { autoClose: false }))

  const update = () =>
    toast.update(toastId.current, { type: toast.TYPE.INFO, autoClose: 5000 })

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <button onClick={update}>Update</button>
    </div>
  )
}

export default ToastHelper
