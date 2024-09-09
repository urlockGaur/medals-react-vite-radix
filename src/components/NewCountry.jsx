import React, { useState } from "react"

function NewCountry(props) {
  const [open, setOpen] = useState(false);
  const [newCountryName, setNewCountryName] = useState("");

  function handleModalKeyPress(e) {
    (e.keyCode ? e.keyCode : e.which) === 13 && handleSave();
  }

  function handleSave() {
    if (newCountryName.length > 0) {
      props.onAdd(newCountryName);
      closeDialog();
    }
  }

  function closeDialog() {
    setNewCountryName("");
    setOpen(false);
  }


  return (
    <>
      {
        (open) ?
          <div style={{
            position: "absolute",
            inset: "100px",
            padding: "5px",
            backgroundColor: "grey",
            zIndex: 10,
          }}>
            <input
              type="text"
              name="newCountryName"
              placeholder="Enter the country name"
              autoComplete="off"
              autoFocus
              value={newCountryName}
              onChange={(e) => setNewCountryName(e.target.value)}
              onKeyUp={handleModalKeyPress}
            /><br />
           <button onClick={(e) => closeDialog()}>
              Cancel
            </button>
            <button onClick={handleSave}>
              Save
            </button>
          </div>
          :
          <button onClick={() => setOpen(true)}>Add Country</button>
      }
    </>
  )
}

export default NewCountry