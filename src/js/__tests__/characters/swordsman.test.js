import { expect, test } from '@jest/globals';
import Swordsman from '../../character/Swordsman';

test('open_Swordsman', () => {
  const hero = new Swordsman('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('attack-without-stoned', () => {
  const hero = new Swordsman('newPerson');
  hero.attack = 35;
  expect(hero.actionAttack(4)).toBe(35);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attackDistance: 4,
    defence: 10,
    attack: 35,
  });
});
