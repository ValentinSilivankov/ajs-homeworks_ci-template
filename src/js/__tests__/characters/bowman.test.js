import { expect, test } from '@jest/globals';
import Bowman from '../../character/Bowerman';

test('open_Bowman', () => {
  const hero = new Bowman('newPerson');
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('attack-without-stoned', () => {
  const hero = new Bowman('newPerson');
  hero.attack = 50;
  expect(hero.actionAttack(2)).toBe(50);
  expect(hero).toEqual({
    name: 'newPerson',
    type: 'Bowman',
    health: 100,
    level: 1,
    attackDistance: 2,
    defence: 25,
    attack: 50,
  });
});
