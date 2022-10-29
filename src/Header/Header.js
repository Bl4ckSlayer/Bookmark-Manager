import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import Creatable from "react-select/creatable";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  let dropdownOptions = [1, 2];

  const stored = localStorage.getItem("dropdown");
  if (stored) {
    dropdownOptions = [];
    dropdownOptions = JSON.parse(stored);
  }

  console.log(dropdownOptions);

  const addOption = () => {
    dropdownOptions.push(dropdownOptions.length + 1);
    localStorage.setItem("dropdown", JSON.stringify(dropdownOptions));
    window.location.reload();
  };

  const EventSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title: event.target.titleText.value,
      url: event.target.url.value,
      group: event.target.select.value,
    };
    let dataArray = [];
    const stored = localStorage.getItem("fakeData");
    if (stored) {
      dataArray = JSON.parse(stored);
    }

    dataArray.push(data);

    localStorage.setItem("fakeData", JSON.stringify(dataArray));
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className="btn-primary">Add Bookmark</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={EventSubmit}>
            <div className="input-group mb-0 w-75 mx-auto">
              <input
                type="titleText"
                placeholder="Title"
                name="titleText"
                id="title"
                required
              />
            </div>

            <div className="input-group mb-0 w-75 mx-auto">
              <input
                type="urlText"
                placeholder="Url"
                name="urlText"
                id="url"
                required
              />
            </div>
            <div className="input-group">
              <label for="className">Catagory </label>
              <select name="className" type="className" id="select">
                {dropdownOptions.map((item) => (
                  <option value={item} key={item}>
                    Catagory {item}
                  </option>
                ))}
              </select>
              <button onClick={() => addOption()}>Plus</button>
            </div>
            <input
              className="form-submit button-87 w-75 mx-auto"
              type="submit"
              required
              value="Save"
            />
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-6 mol-md-6 col-sm-6">
        <h1 className="text-end">Bookmark Manager</h1>
      </div>

      <div className="col-lg-6 mol-md-6 col-sm-6">
        <button
          className=""
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          Add Bookmark
        </button>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Header;
