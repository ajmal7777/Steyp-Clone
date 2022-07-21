import React from "react";
import SideDash from "../MainDashboard/SideDash";
import NavDash from "./NavDash";
import styled from "styled-components";
import { useState } from "react";

function FreeGround() {
    const [divice, setDevice] = useState([
        {
            id: 1,
            img: require("../assets/images/topic/Custom_Size__4.jpg"),
            name: "Divices",
            time: "5 min, 17 sec",
        },

        {
            id: 2,
            img: require("../assets/images/topic/Custom_Size__3.jpg"),
            name: "Operating System",
            time: "10 min, 26 sec",
        },
        
        {
            id: 3,
            img: require("../assets/images/topic/Custom_Size__1.jpg"),
            name: "Keyboard Shortcut",
            time: "3 min, 44 sec",
        },
        
        {
            id: 4,
            img: require("../assets/images/topic/Custom_Size__2.jpg"),
            name: "Mouse",
            time: "5 min, 18 sec",
        },
    ]);
    const [internet, setInternet] = useState([
        {
            id: 1,
            img: require("../assets/images/topic/What_isInternet_MLb1IZv.jpg"),
            name: "What is Internet?",
            time: "3 min, 45 sec",
        },
        
        {
            id: 2,
            img: require("../assets/images/topic/Sublime_features__1_rM9Giup.jpg"),
            name: "What is Website",
            time: "3 min, 21 sec",
        },
    ]);
    const [resource, setResource] = useState([
        {
            id: 1,
            img: require("../assets/images/topic/install_sublime_on_mac_os.jpg"),
            name: "Install sublime on mac os",
            time: "3 min, 27 sec",
        },

        {
            id: 2,
            img: require("../assets/images/topic/Configure_sublime_text_1.jpg"),
            name: "Configure sublime on mac os",
            time: "4 min, 28 sec",
        },
        
        {
            id: 3,
            img: require("../assets/images/topic/Configure_Sublime_on_ubuntu__2.jpg"),
            name: "Install sublime on ubuntu",
            time: "3 min, 19 sec",
        },
        
        {
            id: 4,
            img: require("../assets/images/topic/Configure_Sublime_on_ubuntu.jpg"),
            name: "Configure sublime on ubuntu",
            time: "1 min, 10 sec",
        },
        {
            id: 5,
            img: require("../assets/images/topic/Sublime_features.jpg"),
            name: "Sublime features",
            time: "6 min, 4 sec",
        },
        {
            id: 6,
            img: require("../assets/images/topic/Configure_Sublime_on_ubuntu__1.jpg"),
            name: "Sublime shortcuts",
            time: "6 min, 38 sec",
        },
        {
            id: 7,
            img: require("../assets/images/topic/Installing_Sublime_on_windows.jpg"),
            name: "Installing Sublime on Windows",
            time: "1 min, 7 sec",
        },
        {
            id: 8,
            img: require("../assets/images/topic/Installing_VSCode_on_windows.jpg"),
            name: "Installing VSCode on Windows",
            time: "1 min, 22 sec",
        },
        {
            id: 9,
            img: require("../assets/images/topic/Unzipping_on_windows.jpg"),
            name: "Unzipping on windows",
            time: "28 secs",
        },
        {
            id: 10,
            img: require("../assets/images/topic/zipping_on_windows.jpg"),
            name: "Zipping on Windows",
            time: "31 secs",
        },
    ]);
 
    const [android, setAndroid] = useState([
        {
            id: 1,
            img: require("../assets/images/topic/01_-_Install_file_manager.jpg"),
            name: "Install file manager",
            time: "5 min, 11 sec",
        },

        {
            id: 2,
            img: require("../assets/images/topic/02_-_Creating_a_folder.jpg"),
            name: "Creating a folder",
            time: "3 min, 1 sec",
        },
        
        {
            id: 3,
            img: require("../assets/images/topic/03_-_Installing_code_editor_and_creating_files.jpg"),
            name: "Installing code editor and creating files",
            time: "9 min, 36 sec",
        },
        
        {
            id: 4,
            img: require("../assets/images/topic/04_-_How_to_compress_a_folder.jpg"),
            name: "How to compress a folder",
            time: "3 min, 6 sec",
        },
        {
            id: 5,
            img: require("../assets/images/topic/05_-_Editor_Options.jpg"),
            name: "Editor Options",
            time: "11 min, 34 sec",
        },
        {
            id: 6,
            img: require("../assets/images/topic/06_-_Setting_chrome_as_default_browser.jpg"),
            name: "Setting Chrome as default browser",
            time: "6 min, 38 sec",
        },
        {
            id: 7,
            img: require("../assets/images/topic/07_-_Download_and_show_images.jpg"),
            name: "Download and show images",
            time: "1 min, 7 sec",
        },
        {
            id: 8,
            img: require("../assets/images/topic/08_-_Uploading_a_practice.jpg"),
            name: "Uploading a practice",
            time: "1 min, 22 sec",
        },
        {
            id: 9,
            img: require("../assets/images/topic/09_-_Download_assets_and_extract.jpg"),
            name: "Download assets and extract",
            time: "3 min,5 secs",
        },
        {
            id: 10,
            img: require("../assets/images/topic/10_-_Connecting_keyboard_in_android_phone.jpg"),
            name: "Connecting Keyboard in android phone",
            time: "2 min,25 secs",
        },
    ]);
    
    return (
        <div>
            <NavDash />
            <Side>
                <SideDash />
            </Side>

            <Free>
                <Top>
                    <Head>
                        <h4>Free Ground</h4>
                        <p>Free access for fundamental lessons to make your journey filled with quality pieces of information!</p>
                    </Head>
                    <Form>
                        <Search>
                            <img src={require("../assets/images/icons8-search-50.png")} alt="search" />
                        </Search>
                        <input type="text" placeholder="Search in free ground..." />
                    </Form>
                </Top>
                <Middle>
                    <h4>Devices</h4>
                    <ul>
                        {divice.map((item) => (
                            <li>
                                <img src={item.img} />
                                <h5>{item.name}</h5>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </Middle>
                <Middle>
                    <h4>Internet</h4>
                    <ul>
                        {internet.map((item) => (
                            <li>
                                <img src={item.img} />
                                <h5>{item.name}</h5>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </Middle>
                <Middle>
                    <h4>Resources</h4>
                    <ul>
                        {resource.map((item) => (
                            <li>
                                <img src={item.img} />
                                <h5>{item.name}</h5>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </Middle>
                <Middle>
                    <h4>Resources</h4>
                    <ul>
                        {android.map((item) => (
                            <li>
                                <img src={item.img} />
                                <h5>{item.name}</h5>
                                <span>{item.time}</span>
                            </li>
                        ))}
                    </ul>
                </Middle>
            </Free>
        </div>
    );
}

const Side = styled.div`
    margin-top: 70px;
`;

const Free = styled.section`
    margin-left: 70px;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 22px 28px;
`;
const Head = styled.div`
    h4 {
        font-family: goridita_medium;
        font-size: 23px;
        margin-bottom: 3px;
    }
    p {
        font-size: 14px;
        letter-spacing: 0.01rem;
        font-family: goridita_regular;
        color: #868686;
    }
`;
const Search = styled.div`
    margin-right: 12px;
    width: 18px;
    img {
        width: 100%;
        display: block;
    }
`;
const Form = styled.div`
    padding: 0px 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background: rgb(243, 243, 243);
    height: 39px;
    border-radius: 25px;
    width: 284px;
`;

const Middle = styled.div`
    margin-bottom: 28px;
    padding: 10px 20px; 
    animation: fade 0.33s ease-in-out 0ms;
    h4 {
        font-family: goridita_medium;
        font-size: 18px;
        color: rgb(115, 115, 115);
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 24px;
        li {
            padding: 10px 0px;

            img{
                display: block;
                width: 100%;
            }
            h5 {
                display: block;
                letter-spacing: 0.01rem;
                color: rgb(70, 70, 70);
                font-family: goridita_regular;
                font-size: 14px;
            }
            span {
                color: rgb(119, 119, 119);
                margin-top: 2px;
                display: block;
                font-family: goridita_regular;
                font-size: 13px;
            }
        }
    }
`;

export default FreeGround;
