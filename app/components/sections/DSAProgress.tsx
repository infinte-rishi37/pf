import { useState, useEffect } from 'react';
import { fetchLeetCodeStats, LeetCodeStats } from '@/app/services/leetcode';
import { Line } from 'react-chartjs-2';

interface CombinedStats {
  totalSolved: number;
  platformStats: {
    leetcode: number;
    codeforces: number;
  };
}

const DSAProgress = ({ theme, cfStats }: { theme: string; cfStats: any }) => {
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await fetchLeetCodeStats('your-leetcode-username'); // Replace with your username
        setLeetcodeStats(stats);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const combinedStats: CombinedStats = {
    totalSolved: (leetcodeStats?.totalSolved || 0) + (cfStats?.totalSolved || 0),
    platformStats: {
      leetcode: leetcodeStats?.totalSolved || 0,
      codeforces: cfStats?.totalSolved || 0
    }
  };

  return (
    <section className={`w-full p-8 md:p-16 ${theme === 'dark' ? 'bg-pall-Dd' : 'bg-pall-ll'}`}>
      <h2 className="text-h1 mb-8">DSA Progress</h2>
      {loading ? (
        <div>Loading stats...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="text-h2 mb-4">Total Problems Solved</h3>
            <div className="text-center mb-8">
              <span className="text-4xl font-bold">{combinedStats.totalSolved}</span>
              <p className="text-sm mt-2">Across all platforms</p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>LeetCode</span>
                  <span>{combinedStats.platformStats.leetcode}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(combinedStats.platformStats.leetcode / combinedStats.totalSolved) * 100}%` 
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>CodeForces</span>
                  <span>{combinedStats.platformStats.codeforces}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(combinedStats.platformStats.codeforces / combinedStats.totalSolved) * 100}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
            <h3 className="text-h2 mb-4">Platform Details</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-h3 mb-2">LeetCode</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded">
                    <p className="text-sm">Easy</p>
                    <p className="text-lg font-semibold">{leetcodeStats?.easySolved || 0}</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded">
                    <p className="text-sm">Medium</p>
                    <p className="text-lg font-semibold">{leetcodeStats?.mediumSolved || 0}</p>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded">
                    <p className="text-sm">Hard</p>
                    <p className="text-lg font-semibold">{leetcodeStats?.hardSolved || 0}</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-h3 mb-2">CodeForces</h4>
                <div className="p-4 bg-white/5 rounded">
                  <div className="flex justify-between items-center">
                    <span>Rating</span>
                    <span className="font-semibold">{cfStats?.rating || 0}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span>Max Rating</span>
                    <span className="font-semibold">{cfStats?.maxRating || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DSAProgress;