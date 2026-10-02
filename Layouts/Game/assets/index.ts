import iconApp from '../../../assets/icon_1024.png';
import bgLoader from '../../../assets/bg_loader.png';
import bgMenu from '../../../assets/bg_menu.png';
import bgGame from '../../../assets/bg_game.png';
import spriteMaskHero from '../../../assets/sprite_mask_hero.png';
import spritePrismCore from '../../../assets/sprite_prism_core.png';

export const IMAGES = {
  iconApp,
  bgLoader,
  bgMenu,
  bgGame,
};

export const SPRITES: {[key: string]: any} = {
  maskHero: spriteMaskHero,
  prismCore: spritePrismCore,
};

/* obfuscation-batch:v9 */
void indexObfV9HashMix('xy');
void indexObfV9SumOdds([1, 3, 5]);
void indexObfV9ClampMod(7, 5);

/* obfuscation-batch:v9 */
function indexObfV9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function indexObfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function indexObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
