import React from "react";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const ContactInfo = () => {
  return (
    <>
      <ul className="contact_info_list">
        <li className="contact_info_item">
          <LuPhone size={18}/>
          <p>+ 0800208020</p>
        </li>
        <li className="contact_info_item">
        <GrLocation size={18}/>
          <p> Ukraine, Kiev, Mechnikova street 3</p>
        </li>
        <li className="contact_info_item">
        <MdMailOutline size={18}/>
          <p>online@ithillel.ua</p>
        </li>
      </ul>
    </>
  );
};

export default ContactInfo;
