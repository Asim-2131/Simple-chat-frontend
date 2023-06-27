import React from 'react';
import EmptyChat from '../Components/EmptyChat'
import SelectedChat from '../Components/SelectedChat';
import Logo from '../../assets/Images/logo.png'
import UserImage from '../../assets/Images/dummy-user.png'
import AddPerson from '../../assets/SVGs/add-person.svg'

function Chat() {
  return (
    <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center px-6 py-3 shrink-0">
                <img src={Logo} alt="logo"></img>
                <img src={UserImage} alt="user-ig" className="h-10 w-10 rounded-full"></img>
            </div>
            <div className="mx-10 mt-2 rounded-3xl h-130 bg-white">
                <div className="flex flex-row justify-start h-full items-center">
                    <div className="flex flex-col items-center h-full pb-2">
                        <div className="flex flex-row items-center justify-center px-4 mb-2">
                            <input className="rounded-full border-2 bg-slate-100 border-black m-3 ml-4 w-full px-5 py-2 inline" placeholder="Search Here ..."></input>
                            <img src={AddPerson} alt="add-person" className="h-8 w-8 "></img>
                        </div>
                        <div className="w-full overflow-y-scroll">
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>

                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>

                            <div className="rounded-2xl shadow-sm shadow-sky-600 flex flex-row justify-start items-center mx-3 h-16 mb-2 w-11/12">
                                <img src={UserImage} alt="user-ig" className="h-11 w-11 rounded-full mx-2"></img>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">Mahammadasim Vora</h1>
                                    <h1 className="text-sm">Hello Tehrere what are </h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    {/* <EmptyChat/> */}
                    <SelectedChat/>
                </div>
            </div>
        </div>
    </>
  )
}   

export default Chat