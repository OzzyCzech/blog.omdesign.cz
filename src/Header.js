import React from 'react'

export default ({title}) => {
	return (<>
		<meta charSet="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

		<title>{title}</title>

		<link rel="shortcut icon" href="/favicon.png"/>
		<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
		<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>

		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
		<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
		<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
		<script src="https://stackpath.boo  tstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/components/prism-core.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/autoloader/prism-autoloader.min.js"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/2.0.0-alpha0/date_fns.min.js"></script>
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-132992179-1"></script>
		<script
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-132992179-1');
          `,
			}}
		/>

		<link rel="stylesheet" href="/css/style.css"/>
		<script src="/js/app.js"></script>
	</>)
};