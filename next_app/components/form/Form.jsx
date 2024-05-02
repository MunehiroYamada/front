const Form = ({ setName, setLocation, setPhone, setTitle }) => {
  return (
    <div>
      <h5>※は必須</h5>
      <label>
        氏名
        <input type="text" onChange={(e) => setName(e.target.value)} />※
      </label>
      <div>
        <label>
          住所
          <input type="text" onChange={(e) => setLocation(e.target.value)} />※
        </label>
      </div>
      <div>
        <label>
          連絡先
          <input type="text" onChange={(e) => setPhone(e.target.value)} />※
        </label>
      </div>
      <label>
        役職
        <input type="text" onChange={(e) => setTitle(e.target.value)} />※
      </label>
    </div>
  );
};

export { Form };

// データベースのxmemberテーブルの名前をmemberに変更しました。
// データベースのmemberテーブル内のカラムmemberをnameに変更しました。