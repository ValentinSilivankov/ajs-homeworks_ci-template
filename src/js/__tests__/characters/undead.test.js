import { expect, test } from '@jest/globals';
import Undead from '../../character/Undead';

test('open_Undead', () => {
  const hero = new Undead('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('attack-without-stoned', () => {
  const hero = new Undead('newPerson');
  hero.attack = 25;
  expect(hero.actionAttack(2)).toBe(25);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Undead',
    health: 100,
    level: 1,
    attackDistance: 2,
    defence: 25,
    attack: 25,
  });
});
