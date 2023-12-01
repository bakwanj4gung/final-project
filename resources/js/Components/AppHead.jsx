import { Head } from '@inertiajs/react'

const Site = ({ title }) => {
    return (
        <Head>
            <title>{title ? `${title}` : 'Asisten Tahfidz'}</title>
            <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png" />
            <link rel="icon" type="image/png" href="assets/img/favicon.ico" />
            {/*     Fonts and icons     */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
            {/* Font Awesome Icons */}
            <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
            {/* Nucleo Icons */}
            <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
            <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
            {/* Popper */}
            
            {/* Nepcha Analytics (nepcha.com) */}
            {/* Nepcha is a easy-to-use web analytics. No cookies and fully compliant with GDPR, CCPA and PECR. */}
        </Head>
    )
}

export default Site