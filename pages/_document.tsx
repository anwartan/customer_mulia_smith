import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>

          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            defer
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"
            defer
          ></script>

          <script src="/lib/easing/easing.js" defer></script>
          <script src="/lib/owlcarousel/owl.carousel.min.js" defer></script>
          <script src="/mail/jqBootstrapValidation.min.js" defer></script>
          <script src="/mail/contact.js" defer></script>

          <script src="/js/main.js" defer></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
