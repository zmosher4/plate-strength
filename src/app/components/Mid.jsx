import aboutphoto from '@/app/assets/aboutphoto.avif';
import Image from 'next/image';

export default function Mid() {
  return (
    <>
      <div className="h-[500px] bg-cover bg-no-repeat bg-center bg-[url('./assets/foo.avif')] flex items-center justify-center">
        <div className="  h-[50%] w-[55%] bg-white opacity-80 flex flex-col space-y-4 p-8">
          <div className="text-3xl font-bold">
            Get Stronger. Live Longer. Gain Energy. Reduce Medications.
          </div>
          <div className="text-3xl">
            If you are ready to feel better, move better and reduce the size of
            the clothes in your closet, you've come to the right place!
          </div>
          <div className="text-3xl flex items-center justify-center">
            Coaching for Health and Wellness
          </div>
        </div>
      </div>

      <div className="bg-orange-400 h-fit w-full text-white p-16 flex flex-col justify-center items-center text-3xl font-bold">
        More than just services.&nbsp; I offer solutions.&nbsp; I offer results.
        <div className="font-thin p-8">
          Mindful Nutrition • Purposeful Movement • Stress Relief • Improved
          Sleep • Change Adaptation • Mindset Shifts
        </div>
      </div>

      <div className="bg-cyan-400 h-fit w-full py-16 px-64 flex items-center justify-center leading-relaxed text-center">
        PlateStrength is a premium coaching service that specializes in behavior
        change for adults seeking to rediscover their bodies and revitalize
        their lives. As a nationally board certified health and wellness coach
        and former personal trainer, I have helped many people just like you to
        lose weight, gain strength, reduce their medications and transform their
        lives for the better through habit-based coaching. Connect with me today
        to see how we can work together to create meaningful, attainable goals
        supported by realistic action plans that make change happen.
      </div>

      <div className=" m-4 mt-16  flex flex-col items-center justify-center">
        <div className="text-cyan-400 text-3xl font-light">
          {' '}
          Health and Wellness Coaching for adults who want to rediscover their
          bodies and revitalize their lives.
        </div>
        <div className="m-4 text-center px-64 text-lg pt-4">
          Appreciating the unique nature of each individual is crucial to
          obtaining the best results. Some adults seek a complete body
          transformation while others are happy to regain their self-confidence
          and independence. I am here to help you identify your goals and
          objectives and to support you throughout the process.{' '}
        </div>
        <div className="m-4 text-center px-64 text-lg pt-4">
          Tired of being tired? Had enough of the ups and downs of yo-yo
          dieting? Ready to get your bad-ass self back in the gym? Or onto the
          playground? Could a lifestyle change reduce or eliminate some of the
          medications you are currently taking? I am here to help with all of
          that!
        </div>
        <div className="text-cyan-400 text-2xl font-light pt-16">
          How does it work?
        </div>
        <div className="m-4 text-center px-64 text-lg pt-4">
          After an initial consultation, we will identify the changes you would
          like to see happen and create a roadmap of how to get there. I will be
          your guide, your concierge, your tool provider and your accountability
          partner. You will be making choices and practicing behaviors that lead
          to your desired outcome. Together we make an awesome team.
        </div>
        <div className="text-cyan-400 text-2xl font-light pt-16">
          This is change that lasts a lifetime; not just until your next
          reunion.
        </div>
        <div className="m-4 text-center px-64 text-lg pt-4">
          If you are ready to make a commitment to making positive changes to
          your health, happiness and fitness level, then please click the link
          below to reserve your spot for a free initial consultation. Let's have
          a conversation and see if we are a good fit. I offer packages
          throughout the year and will work with a small number of participants
          so that I can give you the attention that you deserve.
        </div>
        <button className="mt-8 py-2 px-8 bg-orange-500 text-center text-white">
          FREE CONSULTATION
        </button>
      </div>

      <div className="bg-gray-400 h-fit w-full flex flex-col items-center justify-center py-16 px-8">
        <Image
          src={aboutphoto}
          alt="about"
          className="h-64 w-fit border-8 border-white"
        />
        <div className="pt-8 text-2xl">
          Hi! I'm Andrea Mosher. Welcome to PlateStrength.
        </div>
        <div className="pt-8 text-md px-80 text-center">
          I help adults rediscover the potential their bodies and minds have to
          live with purpose and good health so that the journey is filled with
          more good effects and fewer side effects.
        </div>
        <button className="mt-8 py-2 px-8 bg-orange-500 text-center text-white">
          LEARN MORE
        </button>
      </div>

      <div className="bg-black h-fit w-full flex flex-col items-center justify-center py-16 px-8 text-white ">
        <div className="text-6xl font-light">CONTACT INFO</div>
        <div className="pt-8 text-lg">
          Andrea Mosher | PlateStrength | Rochester, NY | 585-455-0051
        </div>
        <button className="mt-8 py-2 px-8 bg-orange-500 text-center text-white">
          LET'S TALK
        </button>

        <footer className="pt-16">© 2022 Andrea Mosher | PlateStrength</footer>
      </div>
    </>
  );
}
