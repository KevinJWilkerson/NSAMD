import React from "react";

const Info = () => {
  return (
    <div className="info flex-row">
      <p>
        We would be honored to assist in your neurosurgical treatment. The
        treatment provided to you will be the latest and best presently
        available within the scope of the accepted standards of care. Our team
        of highly trained surgeons treat the following conditions:
      </p>
      <div className="conditions">
        <ul>
          <li>Aneurysms</li>
          <li>Brain & Spinal Tumors</li>
          <li>Brain Hemorrhages</li>
          <li>Carpal Tunnel</li>
          <li>Chiari Malformation</li>
          <li>Epilepsy</li>
          <li>Head Trauma</li>
          <li>Hydrocephalus</li>
        </ul>
      </div>
      <div className="conditions">
        <ul>
          <li>Movement Disorders</li>
          <li>Nerve Sheath Tumors</li>
          <li>Spinal Disc Herniation, Stenosis & Degeneration</li>
          <li>Spinal Cord Trauma</li>
          <li>Spinal Fractures & Instability</li>
          <li>Trigeminal Neuralgia</li>
          <li>Vascular Malformation</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
