import React, { useState, useEffect } from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img src={user.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{`${user.firstName} ${user.lastName}`}</h5>
        <span className="text-muted d-block">@{user.username}</span>
        <h6 className="m-0 py-1">{user.company.name}</h6>
        <span className="text-muted small d-block">
          {user.address.address} . {user.address.city} .{" "}
          {user.address.postalCode}
        </span>
        <span className="text-muted d-block">
          <em>{user.email}</em>
        </span>
        <a href="#" className="btn btn-sm btn-primary mt-3">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
