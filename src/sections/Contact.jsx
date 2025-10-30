import Section from '../components/Section';

const Contact = () => {
  return (
    // Pass the id "contact" to the Section component
    <Section id="contact"> 
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-300 max-w-lg mx-auto mb-8 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities. 
          Feel free to reach out to me!
        </p>
        <a 
          href="mailto:mali21@binghamton.edu"
          className="px-8 py-4 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-400 transition-colors text-lg"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;