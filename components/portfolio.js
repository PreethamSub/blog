import Script from 'next/script'

export default function Portfolio(props) {
    return (
        <>
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <main className="grid gap-10 md:grid-cols-1 lg:gap-10">
        <section className="mt-2 mb-1" id="about">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-lg">
            I am an undergraduate student studying AIML, with a passion for exploring the possibilities of artificial intelligence and machine learning. I enjoy learning about cutting-edge technologies and developing innovative solutions to real-world problems. My goal is to leverage my skills and knowledge to make a positive impact on society and contribute to the advancement of the field.
          </p>
        </section>

        <section className="my-2" id="skills">
          <h2 className="text-3xl font-bold">Skills</h2>
          <ul className="list-disc list-inside pl-3">
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Python</li>
            <li>C/C++</li>
            <li>Tensorflow</li>
            <li>Full Stack Web development</li>
          </ul>
        </section>

        <section id="certifications">
          <div>
            <h2 className="text-3xl font-bold mb-3">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="justify-self-center">
                <div data-iframe-width="200" data-iframe-height="270" data-share-badge-id="271caad8-0fe6-4cf5-a103-93bd9b3a7e26" data-share-badge-host="https://www.credly.com"></div>
                <Script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"/>
              </div>
              <div className="self-center">
                <h5 className="text-2xl font-bold mb-3">AZ-900</h5>
                <p>
                  Foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.
                </p>
              </div>
              <div className="justify-self-center">
                <div data-iframe-width="200" data-iframe-height="270" data-share-badge-id="dbc3bb08-9602-43ce-b14e-99086fa9a55f" data-share-badge-host="https://www.credly.com"></div>
                <Script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"/>
              </div>
              <div className="self-center">
                <h5 className="text-2xl font-bold mb-3">IBM Data Science Methdology</h5>
                <p>
                  Thorough understanding of the different stages that constitute the data science methodology, which is instrumental to solving any data science problem.
                </p>
              </div>
              </div>
              </div>
              </section>
              </main>
              </div>
              </>
    )

}