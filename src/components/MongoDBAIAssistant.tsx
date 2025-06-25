import React, { useState } from 'react';
import { Database } from 'lucide-react';
import { Copy, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Particles } from '@/components/magicui/particles';
import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text';
import { Meteors } from '@/components/magicui/meteors';
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card';

const MongoDBAIAssistant: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [generatedQuery, setGeneratedQuery] = useState('');
  const [isQueryGenerated, setIsQueryGenerated] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (userInput.trim()) {
      // Mock query generation based on user input
      const mockQuery = generateMockQuery(userInput);
      setGeneratedQuery(mockQuery);
      setIsQueryGenerated(true);
    }
  };

  const handleExampleClick = (example: string) => {
    setUserInput(example);
    const mockQuery = generateMockQuery(example);
    setGeneratedQuery(mockQuery);
    setIsQueryGenerated(true);
  };

  const generateMockQuery = (input: string) => {
    // Simple mock query generation logic
    if (input.toLowerCase().includes('users') && input.toLowerCase().includes('last 30 days')) {
      return `from datetime import datetime, timedelta\nthirty_days_ago = datetime.now() - timedelta(days=30)\nusers = list(db.users.find({"createdAt": {"$gte": thirty_days_ago}}).sort("createdAt", -1))`;
    } else if (input.toLowerCase().includes('users') && input.toLowerCase().includes('older than 25')) {
      return `users = list(db.users.find({"age": {"$gt": 25}}))`;
    } else if (input.toLowerCase().includes('orders') && input.toLowerCase().includes('status')) {
      return `orders_by_status = db.orders.aggregate([{"$group": {"_id": "$status", "count": {"$sum": 1}}}]);`;
    } else if (input.toLowerCase().includes('products') && input.toLowerCase().includes('price greater than')) {
      return `products = list(db.products.find({"price": {"$gt": 100}}))`;
    } else {
      return `// Generated query based on: "${input}"\nquery = db.collection.find({ /* criteria based on input */ });`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedQuery).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }, () => {
      console.error('Failed to copy');
    });
  };

  const handleExecute = () => {
    alert('Query executed successfully! Results will be displayed in the console.');
    setIsQueryGenerated(false);
    setUserInput('');
  };

  const handleCancel = () => {
    setIsQueryGenerated(false);
    setUserInput('');
  };

  const exampleQueries = [
    "📅 Show me all users who signed up in the last 30 days",
    "💰 Find products with price greater than $100 and in stock",
    "📊 Count orders by status and group by month",
    "🏆 Get top 5 customers by total purchase amount",
    "🔍 Find all products that have been reviewed but never purchased",
    "🌍 Show me users from specific location with high activity"
  ];

  return (
    <div className=" backdrop-blur-xl text-white flex flex-col relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <Meteors number={20} className="absolute inset-0" />
      {/* <Particles className="absolute inset-0" /> */}

      {/* Sticky Top Navbar */}
      

      {/* Fixed Header Section - MongoDB AI Assistant */}
      {/* <div className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/30">
        <header className="px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 flex items-center justify-center animate-pulse">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">MongoDB AI Assistant</h1>
              <p className="text-sm text-slate-400">Powered by Advanced AI</p>
            </div>
          </div>
          <Badge className="bg-gradient-to-r from-emerald-400 to-emerald-500 px-4 py-2 rounded-full shadow-lg shadow-emerald-500/25">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-blink"></div>
            <span className="text-sm font-semibold text-white">Connected</span>
          </Badge>
        </header>
      </div> */}

      {/* Main Content Area - Scrollable only if needed */}
      <div className={`mb-6 ${isQueryGenerated ? 'overflow-y-auto' : 'overflow-hidden'} px-3 p-0 mt-3`}>
        {/* Welcome Card */}
        <Card className="bg-transparent rounded-2xl  py-0 m-0 relative overflow-hidden border border-cyan-500/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
              <span className="text-sm font-semibold text-emerald-400">Welcome</span>
            </div>
            <AnimatedGradientText className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Welcome to your AI-powered MongoDB assistant! 🚀
            </AnimatedGradientText>
            <p className="text-base leading-relaxed text-slate-300 mb-4">
              Transform your natural language queries into powerful MongoDB operations. Simply describe what you're looking for, and I'll generate the perfect query with explanations and optimizations.
            </p>
            <div>
              <h3 className="text-base font-semibold text-slate-200 mb-3">✨ Try these example queries:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {exampleQueries.map((query, index) => (
                  <div 
                    key={index} 
                    className="bg-white/8 hover:bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-500/50 p-3 rounded-xl text-left text-sm text-slate-300 hover:text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer" 
                    onClick={() => handleExampleClick(query)}
                  >
                    {query}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Query Result Card (Conditional) */}
        {isQueryGenerated && (
          <div className="bg-white/5 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 mt-4 mb-4 relative overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <span className="text-sm font-semibold text-emerald-400">Query Generated</span>
              </div>
              <p className="text-base text-slate-300 mb-4">
                I've generated the perfect MongoDB query for your request. Here's what I found:
              </p>
              <div className="bg-black/40 border border-white/10 rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-cyan-400">MongoDB Query</span>
                  <Button
                    onClick={handleCopy}
                    variant="ghost"
                    className="text-white hover:bg-slate-700"
                    size="sm"
                  >
                    {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {isCopied ? 'Copied' : 'Copy'}
                  </Button>
                </div>
                <pre className="font-mono text-sm text-slate-300 whitespace-pre-wrap">
                  <code>{generatedQuery}</code>
                </pre>
              </div>
              <div className="flex gap-4">
                <Button
                  onClick={handleExecute}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white hover:translate-y-[-2px]"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Execute Query
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="destructive"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white hover:translate-y-[-2px]"
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </div>
        )}
      </div>

      {/* Fixed Bottom Input Section */}
      <div className="sticky bottom-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 p-4">
        <div className="flex gap-4 items-end">
          <Textarea
            value={userInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type your query here..."
            className="flex-1 bg-white/8 border-2 border-white/10 focus:border-cyan-400 focus:bg-white/12 focus:shadow-lg focus:shadow-cyan-500/20 text-base text-white placeholder:text-slate-500 rounded-2xl p-4 min-h-[60px] max-h-[60px]"
            rows={1}
          />
          <Button
            onClick={handleSubmit}
            disabled={!userInput.trim()}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white h-[60px] min-w-[120px] rounded-2xl font-semibold hover:translate-y-[-2px] hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Send ✨
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MongoDBAIAssistant;
