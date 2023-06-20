import Head from 'next/head'

// A Function for setting the HTML Meta data, allows title exceptions
const Meta = ({ title }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

// Has the site headline as the default title, but changes dynamically
Meta.defaultProps = {
  title: 'Elon News',
}

export default Meta