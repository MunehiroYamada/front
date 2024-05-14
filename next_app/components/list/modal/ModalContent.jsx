import Search from "./ModalSearch";

const ModalContent = ({ setMemberState }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <Search setMemberState={setMemberState} />
      </div>
    </div>
  );
};

export default ModalContent;
