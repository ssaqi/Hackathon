import { Upload } from 'antd';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
const Setting = () => {
  const history = useNavigate();
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }
  const [data, setData]=useState({
    username:"Muhammad Saqib",
  })
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className='set' style={{width: "500px", height: "400px", backgroundColor: "offwhite", margin: "auto"}}>
      <br/>
      <h3 style={{color:"Green"}}>Setting</h3>

      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>

      {data.username}

     
        <h4>Muhammad Saqib</h4>
        <p>One kg beef <br/><span>10,00 PKR</span></p>                    
       
       
        <h4>Muhammad Aqib</h4>
        <p>One kg Mutton <br/><span>16,00 PKR</span></p>                    
       
       <br/>
       
       <Button onClick={userlogout} style={{float:"left", backgroundColor: "green"}}>LogOut</Button>


    </div>
     

  );
};
export default Setting;