import { ProjectCardContent } from '../ProjectCard';

const project = (): ProjectCardContent => {
  return {
    title: 'Cash Pawn & Jewelry Website',
    path: '/cash-pawn-jewelry-website/',
    cardText:
      'A professional website built for Cash Pawn & Jewelry using Gatsby and React.js.',
    cardPhoto: {
      altText: 'Cash Pawn & Jewelry Website Home Page',
      src: {
        childImageSharp: {
          fluid: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABfn1McHAI/8QAGhAAAQUBAAAAAAAAAAAAAAAAAAECAwQSEf/aAAgBAQABBQKw7MNaR6yD1NL0/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBABAAMBAAAAAAAAAAAAAAAAAQACISD/2gAIAQEABj8CsmTbLz//xAAcEAEAAQQDAAAAAAAAAAAAAAABEQAQITFhcYH/2gAIAQEAAT8hZ1IjNMgSNNkEMQ8UAIg86t//2gAMAwEAAgADAAAAEDQf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAh/9oACAECAQE/EByf/8QAHBABAAEEAwAAAAAAAAAAAAAAASEAEBExQWHR/9oACAEBAAE/EMUGYHZNMgzReybGoQSIeSjQZkIJt9Nv/9k=',
            aspectRatio: 1.7328519855595668,
            sizes: '(max-width: 1920px) 100vw, 1920px',
            src:
              '/static/56d0aba06cc4aae5197224cac0f73af4/d8255/cash-pawn_1.jpg',
            srcSet:
              '/static/56d0aba06cc4aae5197224cac0f73af4/9104c/cash-pawn_1.jpg 480w,\n/static/56d0aba06cc4aae5197224cac0f73af4/a6352/cash-pawn_1.jpg 960w,\n/static/56d0aba06cc4aae5197224cac0f73af4/d8255/cash-pawn_1.jpg 1920w,\n/static/56d0aba06cc4aae5197224cac0f73af4/af56c/cash-pawn_1.jpg 2880w,\n/static/56d0aba06cc4aae5197224cac0f73af4/4ee3c/cash-pawn_1.jpg 3554w',
          },
        },
      },
    },
  };
};

export default project;
