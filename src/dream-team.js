import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  let sortMembers = members.sort()
  let teamName = [];
  
  for (let i = 0; i < members.length; i++) {
    if (typeof sortMembers[i] !== "string") {
    continue;
    }
  
    teamName += sortMembers[i][0];
    
  }
  return teamName;
  
}
