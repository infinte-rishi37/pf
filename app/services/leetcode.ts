import { request, gql } from 'graphql-request';

const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';

const userStatsQuery = gql`
  query userStats($username: String!) {
    matchedUser(username: $username) {
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
  }
`;

export interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export const fetchLeetCodeStats = async (username: string): Promise<LeetCodeStats> => {
  try {
    const data = await request(LEETCODE_API_ENDPOINT, userStatsQuery, { username });
    const stats = data.matchedUser.submitStats.acSubmissionNum;
    
    return {
      totalSolved: stats.find((s: any) => s.difficulty === 'All').count,
      easySolved: stats.find((s: any) => s.difficulty === 'Easy').count,
      mediumSolved: stats.find((s: any) => s.difficulty === 'Medium').count,
      hardSolved: stats.find((s: any) => s.difficulty === 'Hard').count,
    };
  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    return {
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
    };
  }
};