import Image from 'next/image';
export default function Page1() {
    return (
        <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Contenedor de la imagen */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/SHIBA_INU.png"
              alt="perrito shiba inu"
              width= {150}
              height={50}
            />
          </div>
          
          {/* Contenedor del texto */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">SHIBA INU</h1>
            <p className="text-gray-600 leading-relaxed">
            El Shiba Inu es una raza de perro originaria de Japón, conocida por su aspecto similar al de un zorro, su cola enrollada y su pelaje denso y suave. Es una de las razas más antiguas y pequeñas de Japón, y su nombre significa "perro pequeño" en japonés. Los Shiba Inus son conocidos por su personalidad independiente, inteligente y alerta, lo que los convierte en excelentes compañeros, aunque a veces pueden ser un poco testarudos.
Fun fact: A pesar de su pequeño tamaño, el Shiba Inu tiene un fuerte instinto de caza y es increíblemente ágil.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center"> 
            {/* Contenedor del texto */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">Lucha Grecorromana</h1>
                <p className="text-gray-600 leading-relaxed">
                El wrestling grecorromano es uno de los deportes más antiguos del mundo. En la antigua Grecia, los luchadores competían, y la lucha era una de las pruebas principales en los Juegos Olímpicos antiguos. Además, este estilo de lucha ha sido dominado históricamente por países como Rusia, Turquía, Irán y países escandinavos, que tienen una larga tradición en este deporte.
                ¡Es un deporte que combina fuerza, técnica y tradición histórica! 💪🏛️
                </p>
            </div>
            {/* Contenedor de la imagen */}
            <div className="w-full md:w-1/2">
                <Image
                src="/images/Wrestling.png"
                alt="Luchadores"
                width={250}
                height={150}
                />
            </div>

        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center"> 
            {/* Contenedor de la imagen */}
            <div className="w-full md:w-1/2">
                <Image
                src="/images/JLOVE.png"
                alt="Foto de Jordan Love"
                width= {300}
                height={150}
                />
            </div>
            
            {/* Contenedor del texto */}
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">PACKERS</h1>
                <p className="text-gray-600 leading-relaxed">
                Los Green Bay Packers son uno de los equipos más icónicos y queridos de la National Football League (NFL). Con sede en Green Bay, Wisconsin, son conocidos por su rica historia, su base de fanáticos apasionados y su éxito en el campo.
                Juegan en el Lambeau Field, uno de los estadios más emblemáticos de la NFL. Inaugurado en 1957, es famoso por su ambiente eléctrico y por ser uno de los pocos estadios que se llena en cada partido, incluso en los fríos inviernos de Wisconsin.
                </p>
            </div>
        </div>
      </div>
    );
}