<nav className="border-2 w-full py-3">
<div className="flex items-center sm:justify-between w-full px-4 mx-auto flex-wrap-inherit">
    
    {header && (
        <header>
            <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">{header}</div>
        </header>
    )}

        {/* <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                Dashboard 2
            </NavLink>
        </div> DITARUH DI ASIDE*/}
    <div className="flex items-center justify-between mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
        {/* Search */}
        <div className="flex border-2 items-center md:ml-auto md:pr-4 ">
            <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                    <i className="fa fa-search"></i>
                </span>
                <input type="text" className="pl-8.75 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="Type here..." />
            </div>
        </div>
        {/* End of Search */}

        {/* Profile Nav => XL Show - SM Hidden */}

        {/* Profile Nav - XL */}
        <div className="hidden items-center sm:flex">
            <div className="ms-3 relative">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 focus:outline-none"
                            >
                                <span className="hidden md:inline">{user.name}</span>
                                {/* <i class="fa fa-user sm:mr-1"></i> */}
                                <i className="fa fa-user cursor-pointer sm:mr-1 "></i>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                        <Dropdown.Link href={route('logout')} method="post" as="button">
                            Log Out
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
        </div>

        <div className="-me-2 flex items-center sm:hidden">
            <button
                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
            <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
                    Dashboard
                </ResponsiveNavLink>
            </div>

            <div className="pt-4 pb-1 border-t border-gray-200">
                <div className="px-4">
                    <div className="font-medium text-base text-gray-800">{user.name}</div>
                    <div className="font-medium text-sm text-gray-500">{user.email}</div>
                </div>

                <div className="mt-3 space-y-1">
                    <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                    <ResponsiveNavLink method="post" href={route('logout')} as="button">
                        Log Out
                    </ResponsiveNavLink>
                </div>
            </div>
        </div>
    </div>
</div>
</nav>