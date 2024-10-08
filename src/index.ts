import resultWrapper from './helper';

// Creational Patterns
import abstractFactory from './creational/abstract-factory';
import builder from './creational/builder';
import factory from './creational/factory';
import prototype from './creational/prototype';
import singleton from './creational/singleton';

function index(): void {
  resultWrapper('SINGLETON', singleton);
  resultWrapper('PROTOTYPE', prototype);
  resultWrapper('BUILDER', builder);
  resultWrapper('FACTORY', factory);
  resultWrapper('ABSTRACT FACTORY', abstractFactory);
}

index();
