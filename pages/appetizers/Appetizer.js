// appetizers page
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import Card from '@/components/appetizers/Card';
import Footer from '@/components/misc/Footer';
import appetizers from '@/data/appetizers';

export default function Appetizer() {
  return (
    <>
      <Head>
        <title>{"Lucy's || Appetiizers "}</title>
        <meta name="description" content="Appetizers page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container layout h-100">
        <h1>Appetizers</h1>
        <div className="container-fluid text-center py-4 my-4 pt-5 mt-5">
          <div className="row row-cols-1 row-cols-1">
            {appetizers.map((appetizers) => (
              <div
                key={appetizers.id}
                className=" col-md-4 col-md-6 col-sm-12 mb-4"
              >
                <Card appetizers={appetizers} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
