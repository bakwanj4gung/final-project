import { useState } from 'react';
import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, header, children, active = false }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <aside className="text-white max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
                <div className="h-19.5">
                    <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden" sidenav-close="true" />
                    <a className="block px-8 py-3 m-0 text-sm whitespace-nowrap ">
                        <div className="flex items-center h-full max-w-full transition-all duration-200 ease-nav-brand max-h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="50px" height="50px" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 6.827 6.827" id="quran"><path fillRule="nonzero" d="M2.001 1.587a.08.08 0 0 0-.093-.13l-.427.303a.08.08 0 0 0-.033.072v1.67a.08.08 0 0 0 .16 0V1.866L2 1.586zM3.018 4.06a.08.08 0 0 0 .136.083.205.205 0 0 1 .098-.073.475.475 0 0 1 .18-.034.48.48 0 0 1 .174.03.224.224 0 0 1 .101.07.08.08 0 0 0 .13-.094.382.382 0 0 0-.173-.124.641.641 0 0 0-.231-.042.636.636 0 0 0-.242.046.361.361 0 0 0-.173.138z"></path><path fillRule="nonzero" d="M3.413 3.712c.273-.492 1.118-.592 1.379-.61V1.608c-1.308.122-1.299.721-1.299.723 0 .106-.16.104-.16 0 0-.026-.017-.604-1.298-.723V3.1c.26.019 1.107.116 1.377.611zm.08.254c-.007.063-.078.077-.078.072a.08.08 0 0 1-.084-.07c-.09-.652-1.276-.708-1.372-.711a.08.08 0 0 1-.084-.08V1.522a.08.08 0 0 1 .086-.08c.96.071 1.319.398 1.452.635.134-.237.491-.562 1.448-.634a.08.08 0 0 1 .09.08v1.653c0 .202-1.343.01-1.458.79z"></path><path fillRule="nonzero" d="M4.918 1.457a.08.08 0 0 0-.092.13l.393.279-.015 1.64a.08.08 0 0 0 .16.002l.015-1.675a.08.08 0 0 0-.034-.073l-.427-.303z"></path><path fillRule="nonzero" d="m5.469 3.522-1.834.706.185.072 1.38-.55c.027-.008.253-.089.269-.228zm-2.084.632 2.121-.818a.08.08 0 0 1 .115.072v.03c.075.322-.372.465-.373.466l-1.391.553a.08.08 0 0 1-.065.003l-.401-.155a.08.08 0 0 1-.006-.151zm-.38.317c-.553.213-1.103.427-1.656.643.008.05.039.117.148.11l1.7-.677-.191-.076zm-.034-.158a.08.08 0 0 1 .065-.002l.4.16a.08.08 0 0 1 .007.15l-1.891.753a.08.08 0 0 1-.028.008c-.352.037-.34-.28-.336-.33.002-.044.044-.08.088-.081.565-.22 1.13-.44 1.695-.658z"></path><path fillRule="nonzero" d="M4.836 3.962a.08.08 0 0 0-.13.091c.056.081.14.186.25.278.112.094.25.175.412.204.019.006.134.045.108.221a.08.08 0 0 0-.001.016l-.008.281a.08.08 0 0 0 .16.004l.007-.281c.043-.304-.183-.383-.225-.395a.737.737 0 0 1-.35-.172 1.295 1.295 0 0 1-.223-.247z"></path><path fillRule="nonzero" d="m1.32 3.336 4.267 1.645a.08.08 0 0 1 .051.072c.004.049.017.366-.335.329l.008-.08-.008.08a.08.08 0 0 1-.028-.008l-3.696-1.47c-.001 0-.449-.144-.373-.465v-.03a.08.08 0 0 1 .114-.073zM5.478 5.11l-4.12-1.588c.015.14.242.22.268.229a.08.08 0 0 1 .008.002l3.695 1.47c.113.008.142-.063.149-.113z"></path><path fillRule="nonzero" d="M2.121 4.053a.08.08 0 0 0-.13-.091c-.05.072-.125.165-.223.247a.737.737 0 0 1-.34.17.081.081 0 0 0-.01.002c-.043.012-.268.091-.226.395l.008.281a.08.08 0 0 0 .16-.004l-.008-.28v-.017H1.35c-.026-.176.089-.215.107-.22.162-.03.3-.11.413-.205.11-.092.194-.197.25-.278zm1.212-.095a.08.08 0 0 0 .16 0V2.332a.08.08 0 0 0-.16 0v1.626zM.935 5.225a.08.08 0 0 0 0 .16h4.957a.08.08 0 0 0 0-.16H.935z"></path><path fill="none" d="M0 0h6.827v6.827H0z"></path></svg>
                            {/* <a href="https://iconscout.com/icons/quran" class="text-underline font-size-sm" target="_blank">Quran</a> by <a href="https://iconscout.com/contributors/exeyecon" class="text-underline font-size-sm">Ex Eyecon</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a> */}
                            <span className="ml-1 text-lg tracking-wide font-semibold transition-all duration-200 ease-nav-brand">Asisten Tahfidz</span>
                        </div>
                    </a>
                </div>
                <hr className="h-0.5 mt-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
                    <ul className="flex flex-col pl-0 mb-0 mt-4">
                    <li className="mt-0.5 w-full">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                                <svg width="12px" height="12px" viewBox="0 0 45 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>shop</title>
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g transform="translate(-1716.000000, -439.000000)" fill="#FFFFFF" fillRule="nonzero">
                                    <g transform="translate(1716.000000, 291.000000)">
                                        <g transform="translate(0.000000, 148.000000)">
                                        <path className="fill-slate-800 opacity-60" d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" />
                                        <path className="fill-slate-800" d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" />
                                        </g>
                                    </g>
                                    </g>
                                </g>
                                </svg>
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="mt-0.5 w-full">
                        <NavLink href={route('datasantri')} active={route().current('datasantri') || route().current('inputsantri')}>
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>office</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-1869.000000, -293.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(153.000000, 2.000000)">
                                    <path className="fill-slate-800 opacity-60" d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z" />
                                    <path className="fill-slate-800" d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Data Santri</span>
                        </NavLink>
                    </li>
                    <li className="mt-0.5 w-full">
                        <NavLink href={route('dataustadz')} active={route().current('dataustadz') || route().current('inputustadz')} >
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>credit-card</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                    <path className="fill-slate-800 opacity-60" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" />
                                    <path className="fill-slate-800" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Data Asatidzah</span>
                        </NavLink>
                    </li>
                    <li className="mt-0.5 w-full">
                        <NavLink href={route('inputmingguan')} active={route().current('inputmingguan')}>
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>box-3d-50</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(603.000000, 0.000000)">
                                    <path className="fill-slate-800" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z" />
                                    <path className="fill-slate-800 opacity-60" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" />
                                    <path className="fill-slate-800 opacity-60" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Laporan Mingguan</span>
                        </NavLink>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/rtl.html">
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>settings</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(304.000000, 151.000000)">
                                    <polygon className="fill-slate-800 opacity-60" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667" />
                                    <path className="fill-slate-800 opacity-60" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" />
                                    <path className="fill-slate-800" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">RTL</span>
                        </a>
                    </li>
                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 font-bold leading-tight uppercase text-xs opacity-60">Account pages</h6>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/profile.html">
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>customer-support</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(1.000000, 0.000000)">
                                    <path className="fill-slate-800 opacity-60" d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" />
                                    <path className="fill-slate-800" d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z" />
                                    <path className="fill-slate-800" d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/sign-in.html">
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="12px" viewBox="0 0 40 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>document</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-1870.000000, -591.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(154.000000, 300.000000)">
                                    <path className="fill-slate-800 opacity-60" d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z" />
                                    <path className="fill-slate-800" d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign In</span>
                        </a>
                    </li>
                    <li className="mt-0.5 w-full">
                        <a className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" href="../pages/sign-up.html">
                        <div className="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
                            <svg width="12px" height="20px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>spaceship</title>
                            <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(4.000000, 301.000000)">
                                    <path className="fill-slate-800" d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z" />
                                    <path className="fill-slate-800 opacity-60" d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z" />
                                    <path className="fill-slate-800 opacity-60" d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" />
                                    <path className="fill-slate-800 opacity-60" d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" />
                                    </g>
                                </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Sign Up</span>
                        </a>
                    </li>
                    </ul>
                </div>
            </aside>
            <div className="bg-white ease-soft-in-out xl:ml-68.5 relative h-full rounded-2xl transition-all duration-200">
                <nav className="relative flex items-center justify-between px-0 py-3 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-main="true" navbar-scroll="true">
                    <div className="flex flex-col justify-center w-full px-4 py-1 mx-auto md:flex-row md:items-center md:justify-between">
                        <nav>
                            {/* <!-- breadcrumb --> */}
                            {header && (
                            <header>
                                <h6 className="mb-2 font-bold capitalize md:mb-0">{header}</h6>
                            </header>
                            )}
                        </nav>

                        <div className="flex items-center mt-2 sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                            <div className="flex items-center md:ml-auto md:pr-4">
                                <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                    </div>
                                    <input className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." />
                                </div>
                            </div>
                            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <li className="flex items-center cursor-pointer transition-all ease-nav-brand text-md text-slate-500 md:mx-6">
                                                <span className="hidden sm:inline">{user.name}</span>
                                                <i className="fa fa-user sm:mr-1 md:ml-3"></i>
                                        </li>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                <li className="flex items-center pl-4 xl:hidden">
                                    <a className="block p-0 transition-all ease-nav-brand text-sm text-slate-500"> {/* TAMBAH ONCLICK */}
                                    <div className="w-4.5 overflow-hidden">
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                        <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                                    </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <hr className="h-0.5 mt-0 bg-transparent bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                <main className="w-full px-6 py-6 mx-auto">{children}</main>
            </div>
        </>
    );
}
