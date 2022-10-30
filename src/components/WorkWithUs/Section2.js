import "./Section2.css";

const Section2 = () => (
  <div className="work-section2">
    <form>
      <h1 className="orange">Nộp đơn ứng tuyển</h1>
      <div>
        <label>Họ và tên (fullname)*</label>
        <br />
        <input type="text" placeholder="Họ và tên"></input>
      </div>
      <div>
        <label>Địa chỉ Email*</label>
        <br />
        <input type="text" placeholder="Họ và tên"></input>
      </div>
      <div>
        <label>Số điện thoại (Phone number)*</label>
        <br />
        <input type="text" placeholder="Họ và tên"></input>
      </div>
      <button className="cv">
        CV của bạn <br />
        Click để chọn và tải CV của bạn (chỉ nhận file pdf, tối đa 30MB)
      </button>
      <br />
      <button className="cv-submit">Nộp đơn ứng tuyển</button>
    </form>
  </div>
);
export default Section2;
