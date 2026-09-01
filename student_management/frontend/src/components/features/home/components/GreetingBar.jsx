import { useState } from "react";
import { Megaphone, UserPlus } from "lucide-react";

import { useCurrentDate } from "@/hooks/useCurrentDate";
import NoticeModal from "./NoticeModal";
import { Link } from "react-router-dom";

const GreetingBar = () => {
  useCurrentDate();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="greeting-bar">
        <div className="greeting-text">
          <h1 className="greeting-title" id="greetingTitle">
            Good morning, Priscilla
          </h1>
          <p className="greeting-sub" id="greetingDate">
            Loading today's date…
          </p>
        </div>
        <div className="greeting-actions">
          <button
            className="btn btn-secondary"
            id="createNoticeBtn"
            onClick={() => setModalOpen(true)}>
            <Megaphone />
            Create Notice
          </button>

          <Link to={"allstudents"} className="btn btn-primary">
            <UserPlus />
            <span>Add Student</span>
          </Link>
        </div>
      </section>
      <NoticeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default GreetingBar;
