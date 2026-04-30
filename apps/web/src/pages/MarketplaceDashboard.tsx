import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  ShoppingBag, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Box,
  Rocket,
  Zap,
  Globe
} from 'lucide-react';

const provisioningTrends = [
  { month: 'Jan', infra: 120, apps: 85, apis: 45 },
  { month: 'Feb', infra: 145, apps: 92, apis: 60 },
  { month: 'Mar', infra: 190, apps: 130, apis: 110 },
  { month: 'Apr', infra: 230, apps: 180, apis: 155 },
  { month: 'May', infra: 280, apps: 220, apis: 210 },
  { month: 'Jun', infra: 340, apps: 290, apis: 280 },
];

const serviceAdoption = [
  { name: 'K8s Cluster', value: 35, color: '#4f69ed' },
  { name: 'Managed RDS', value: 25, color: '#708cf5' },
  { name: 'S3 Buckets', value: 20, color: '#a1b5fa' },
  { name: 'API Gateway', value: 15, color: '#ced9fd' },
  { name: 'Other', value: 5, color: '#ebf0fe' },
];

const KPI_CARDS = [
  { title: 'Marketplace Orders', value: '1.8k', trend: '+28% MoM', color: 'indigo', icon: ShoppingBag },
  { title: 'Avg Provision Time', value: '4.5m', trend: '-15% QoQ', color: 'indigo', icon: Clock },
  { title: 'Total Active Services', value: '412', trend: 'Growing Fleet', color: 'indigo', icon: Box },
  { title: 'Self-Service Rate', value: '94.2%', trend: 'High Autonomy', color: 'indigo', icon: Zap },
];

const MarketplaceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Developer Marketplace Hub</h1>
          <p className="text-slate-400">Institutional self-service infrastructure and application delivery plane.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Manage Catalog
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            New Provisioning Request
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-indigo-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-indigo-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Provisioning Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Service Provisioning Velocity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={provisioningTrends}>
                <defs>
                  <linearGradient id="colorInfra" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f69ed" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4f69ed" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="infra" stroke="#4f69ed" strokeWidth={3} fillOpacity={1} fill="url(#colorInfra)" name="Infrastructure" />
                <Area type="monotone" dataKey="apps" stroke="#708cf5" strokeWidth={2} fillOpacity={0} name="Applications" />
                <Area type="monotone" dataKey="apis" stroke="#a1b5fa" strokeWidth={2} fillOpacity={0} name="APIs" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Service Adoption Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Catalog Product Popularity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceAdoption}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {serviceAdoption.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {serviceAdoption.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Catalog Items / Activity Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Provisioning Operations</h3>
          <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View Operation History</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Service Name</th>
                <th className="px-6 py-4 font-semibold">Requester</th>
                <th className="px-6 py-4 font-semibold">Environment</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Elapsed Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'Redis Cache (Standard)', user: 'team-payments', env: 'Production', status: 'In Progress', time: '2m 14s' },
                { name: 'Next.js Frontend Boilerplate', user: 'team-growth', env: 'Staging', status: 'Completed', time: '4m 02s' },
                { name: 'GCP PubSub Topic', user: 'team-data-eng', env: 'Development', status: 'Failed', time: '1m 45s' },
              ].map((op) => (
                <tr key={op.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{op.name}</span>
                      <span className="text-xs text-slate-500 font-mono">ID: op-782x...</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{op.user}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{op.env}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      op.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                      op.status === 'Failed' ? 'bg-rose-500/10 text-rose-500' : 'bg-indigo-500/10 text-indigo-500 animate-pulse'
                    }`}>
                      {op.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">{op.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
