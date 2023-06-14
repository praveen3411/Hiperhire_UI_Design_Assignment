import "../Css/main.css";
import { FaLessThan } from "react-icons/fa";
import { BiBell, BiImages } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

import first from "../Images/first.png";
import Success from "../Images/correct.png";
import ButtonComponet from "./Buttoncomponent";
import SliderRools from "./SliderImages";
import Pig1 from "../Images/pig.png";
export default function HeaderComponent() {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="mainheader">
        <div>
          <FaLessThan className="lefticon" />
        </div>
        <div className="mainlogo">자유톡</div>
        <div>
          <BiBell className="bellicon" />
        </div>
      </div>
      {/* Subheader */}
      <div className="subheader">
        <div className="display1">
          <div>
            <img src={Pig1} alt="logo" className="piglogo" />
          </div>
          <div className="display2">
            <h3>안녕 나 응애</h3>
            <img src={Success} alt="success logo" className="successlogo" />
            <p>1일전</p>
          </div>
          <br />
          <div className="smalltext">
            <p>165cm . 53kg</p>
          </div>
        </div>
        <div>
          <button className="follow">팔로우</button>
        </div>
      </div>
      {/* Content */}
      <div className="content">
        <h1>지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</h1>
        <br />
        <p>
          지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시
          어떤 상품이 제일 괜찮았어?
        </p>
        <p>
          후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일
          재밌었다던데 맞아???
        </p>
        <p>
          올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌
          사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던
          팝들 있으면 어땠는지 후기 좀 공유해주라~~!
        </p>
        <ButtonComponet />
      </div>
      {/* Image Slider */}
      <SliderRools />
      {/* Comments Section */}
      <div className="comments">
        <div className="comments1">
          <FcLike className="commentsicon" /> <p>5</p>
        </div>
        <div className="comments1">
          <FaRegCommentDots className="commentsicon1" /> <p>5</p>
        </div>
        <div className="comments1">
          <MdOutlineCollectionsBookmark className="commentsicon2" />
        </div>
        <div className="comments1">
          <BsThreeDots className="commentsicon3" />
        </div>
      </div>
      {/* SubheaderTwo */}
      <div className="subheader">
        <div className="display1">
          <div>
            <img src={Pig1} alt="logo" className="piglogo" />
          </div>
          <div className="display2">
            <h3>안녕 나 응애</h3>
            <img src={Success} alt="success logo" className="successlogo" />
            <p>1일전</p>
          </div>
        </div>
        <div className="comments2">
          <BsThreeDots className="commentsicon" />
        </div>
      </div>
      {/* childcommentsection */}
      <div className="childs">
        <div>
          <p>
            어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도
            아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가
            기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰
            올라온다고 하니 꼭 봐주세용~!
          </p>
        </div>
        <div className="commentssection">
          <div className="comments2">
            <FcLike className="commentsicon4" /> <p>5</p>
          </div>
          <div className="comments2">
            <FaRegCommentDots className="commentsicon5" /> <p>5</p>
          </div>
        </div>
        <div className="subheader1">
          <div className="display1">
            <div>
              <img src={first} alt="logo" className="piglogo" />
            </div>
            <div className="display3">
              <h3>ㅇㅅㅇ</h3>
              <p>1일전</p>
            </div>
          </div>
          <div className="comments1">
            <BsThreeDots className="commentsicon3" />
          </div>
        </div>
        <div>
          <p id="one">오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
        </div>
        <div className="commentssection">
          <div className="comments3">
            <FcLike className="commentsicon4" /> <p>5</p>
          </div>
        </div>
      </div>
      {/* Upload and comment section */}
      <div className="upload">
        <div className="upload1">
          <div >
            <BiImages className="imgloog" />
          </div>
          <div>
            <input type="text" placeholder="댓글을 남겨주세요." />
          </div>
        </div>
        <div>
          <p className="send">등록</p>
        </div>
      </div>
    </div>
  );
}
