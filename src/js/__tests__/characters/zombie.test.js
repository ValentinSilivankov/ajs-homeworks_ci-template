import { expect, test } from '@jest/globals';
import Zombie from '../../character/Zombie';

test('open_Zombie', () => {
  const hero = new Zombie('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('attack-without-stoned', () => {
  const hero = new Zombie('newPerson');
  hero.attack = 65;
  expect(hero.actionAttack(3)).toBe(65);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Zombie',
    health: 100,
    level: 1,
    attackDistance: 3,
    defence: 10,
    attack: 65,
  });
});
