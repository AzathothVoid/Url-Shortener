import React from "react";

export default function ButtonGroup() {
  return (
    <div className="btn-group">
      <button id="btn-1" className="btn btn--peach">
        Sign in
      </button>
      <p className="mobile-hidden">OR</p>
      <button type="submit" id="btn-2" className="btn btn--peach">
        Sign up
      </button>
    </div>
  );
}
