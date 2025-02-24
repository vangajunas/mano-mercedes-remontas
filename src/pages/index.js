import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image'; // Importuojame `next/image` komponentą
import Head from 'next/head';

function MercedesSuspensionLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Head>


        <!-- Tradicinis favicon -->
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  
        <!-- PNG piktogramos, naudojamos įvairiuose įrenginiuose -->
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  
        <!-- Web App manifestas -->
        <link rel="manifest" href="/site.webmanifest">


        <title>Mercedes Benz Važiuoklės Remontas | Pakabos, Vairo, Pusašių Keitimas Kaune</title>
        <meta 
          name="description" 
          content="Mercedes Benz pakabos remontas Kaune. Profesionalus pakabos, pneumatinių pagalvių, pusašių keitimas. Kokybiškos paslaugos pagal Air Matic® sistemą." 
        />
        <meta 
          name="keywords"
          content="Mercedes Benz Važiuoklės remontas, Pakabos remontas Kaune, Pneumatinės važiuoklės remontas, Air Matic® pakabos remontas, Mercedes Benz remonto paslaugos Kaune"
        />
        <meta property="og:title" content="Mercedes Benz Važiuoklės Remontas | Pakabos, Vairo, Pusašių Keitimas Kaune" />
        <meta property="og:description" content="Profesionalus Mercedes Benz pakabos remontas Kaune. Siūlome pakabos, pneumatinių pagalvių, pusašių keitimo paslaugas." />
        <meta property="og:image" content="https://www.mercedesvaziuoklesremontas.lt/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mercedesvaziuoklesremontas.lt" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white text-center py-16 px-4 relative">
        <Image 
          src="/images/workshop.jpg" 
          alt="Mercedes Benz" 
          width={1920} 
          height={1080} 
          style={{ objectFit: 'cover' }} 
          className="absolute inset-0 w-full h-full opacity-20" 
        />
        <h1 className="text-4xl font-bold mb-4 relative">Mercedes - Benz Važiuoklės remontas</h1>
        <p className="text-xl mb-6 relative">Pakabos remontas Air Matic® | Pneumatinės/orinės važiuoklės remontas</p>
        <Button 
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl text-lg relative"
          onClick={() => window.location.href = 'tel:+37068750288'} 
        >         
          Registruotis važiuoklės patikrai
        </Button>
      </section>

      {/* About Us */}
      <section className="py-12 px-4 max-w-4xl mx-auto bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-md text-center">
        <Image 
          src="/images/diagnostics.jpg"
          alt="Diagnostika"
          width={700}
          height={400}
          className="mx-auto rounded-2xl mb-6"
        />
        <h2 className="text-3xl font-semibold mb-4 text-gray-200">Profesionali važiuoklės patikra</h2>
        <p className="text-lg text-gray-300">Greitas ir tikslus gedimų nustatymas. Kokybiškas gedimų pašalinimas.</p>
      </section>

      {/* Services */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Mūsų paslaugos</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[ 
            { name: "Pneumatinių pagalvių keitimas", image: "/images/shock-absorber.jpg" },
            { name: "Vairo kolonėlės nuėmimas, uždėjimas, keitimas", image: "/images/airbag-replacement.jpg" },
            { name: "Tepalų / filtrų keitimas", image: "/images/steering-column.jpg" },
            { name: "Pusašių keitimas, diagnozavimas", image: "/images/axle-repair.jpg" }
          ].map((service, index) => (
            <Card key={index} className="shadow-md rounded-2xl bg-gray-800 border border-gray-600 text-center">
              <Image 
                src={service.image}
                alt={service.name}
                width={400}
                height={240}
                className="mx-auto rounded-t-2xl"
              />
              <CardContent className="p-6 text-lg font-medium text-gray-100">{service.name}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-gray-900 to-black text-center">
        <h2 className="text-3xl font-semibold mb-4 text-white">Susisiekite su mumis</h2>
        
        {/* Centering the Image */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/images/workshop.jpg" 
            alt="Servisas" 
            width={550} 
            height={412} 
            className="rounded-2xl"
          />
        </div>

        <p className="mb-6 text-gray-400">UAB „Pašilės Servisas“ | MERCEDES-BENZ</p>
        <p className="mb-6 text-gray-400">
          <a 
            href="https://www.google.com/maps?q=Pašilės+g.+104,+Kaunas" 
            target="_blank" 
            className="text-blue-400 hover:underline"
          >
            Pašilės g. 104, Kaunas
          </a>
        </p>
        <p className="mb-6 text-gray-400">
          <a href="tel:+37068750288" className="text-blue-400 hover:underline">Telefonas: +370 68750288</a>
        </p>

        {/* El. paštas, kuris yra aktyvi nuoroda */}
        <p className="mb-6 text-gray-400">
          <a href="mailto:lazaitis@yahoo.com" className="text-blue-400 hover:underline">lazaitis@yahoo.com</a>
        </p>
        <p className="mb-6 text-gray-400">www.mercedesvaziuoklesremontas.lt</p>
        <p className="mb-6 text-gray-400">Darbo valandos: I-IV 09:00–17:00 | V 09:00–13:00</p>
        <p className="mb-6 text-gray-400">VI-VII Nedirbame | Pietų pertrauka: 13:00-14:00</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p>© {new Date().getFullYear()} UAB „Pašilės Servisas“. Visos teisės saugomos.</p>
      </footer>
    </div>
  );
}

export default MercedesSuspensionLanding;
