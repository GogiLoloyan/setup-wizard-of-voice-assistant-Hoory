import React from "react";
import { useSelector } from "react-redux";
import Seperator from "../../common/Seperator";
import InputBackgroundWrapper from "../../common/InputBackgroundWrapper";
// import { selectIconByParams } from "../../../utils/selectIconByParams";
import VoiceAssistantEdit from "./components/VoiceAssistantEdit";

function Account() {
  const { name, surname, email } = useSelector(store => store.auth);
  const { name: assistantName, gender, theme } = useSelector(
    store => store.voiceAssistant
  );
  // const icon = selectIconByParams(gender, theme);

  return (
    <div className="account">
      <nav className="account__nav">
        <div className="user">
          <div className="user__iamge-wrapper">
            {/* <img img="" className="user__iamge" alt="picture" /> */}
          </div>
          <div className="user__info">
            <h3 className="user__full-name">{`${name || "Azat"} ${surname ||
              "Martin"}`}</h3>
            <p className="user__email">{email || "example@email.com"}</p>
          </div>
        </div>
        <InputBackgroundWrapper
          width="200px"
          borderRadius="16px"
          height="50px"
          render={() => <p className="logout">Logout</p>}
        />
      </nav>
      <Seperator />
      <div className="account__content">
        <div className="workspaces">
          <InputBackgroundWrapper
            height="40px"
            marginBottom="10px"
            render={() => (
              <label className="search-label">
                <input placeholder="Search" className="workspaces__search" />
              </label>
            )}
          />
          <InputBackgroundWrapper
            render={() => <VoiceAssistantEdit name={assistantName} />}
          />
          <InputBackgroundWrapper
            render={() => <VoiceAssistantEdit name={"Jack"} />}
          />
          <InputBackgroundWrapper
            render={() => <VoiceAssistantEdit name={"Azat"} />}
          />
          <InputBackgroundWrapper
            marginTop="10px"
            render={() => <p className="add-workspace">+ Add Workspace</p>}
          />
        </div>
      </div>
    </div>
  );
}

export default Account;
