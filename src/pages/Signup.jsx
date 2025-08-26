import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes'
  });

  const set = (k, v) => setForm(s => ({ ...s, [k]: v }));

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.email || !form.password) {
      alert("Please fill all required fields!");
      return;
    }
    nav('/account');
  };

  return (
    <div className="p-6 pb-20">
      <h2 className="text-2xl font-extrabold text-gray-900">Create your PopX account</h2>
      <div className="mt-6 space-y-4">
        <div>
          <label className="text-xs text-popxPurple">Full Name<span className="text-red-500">*</span></label>
          <input value={form.name} onChange={e => set('name', e.target.value)} className="w-full mt-1 p-3 rounded-lg border border-gray-200" placeholder="Marry Doe" required />
        </div>
        <div>
          <label className="text-xs text-popxPurple">Phone number<span className="text-red-500">*</span></label>
          <input value={form.phone} onChange={e => set('phone', e.target.value)} className="w-full mt-1 p-3 rounded-lg border border-gray-200" placeholder="9876543210" required />
        </div>
        <div>
          <label className="text-xs text-popxPurple">Email address<span className="text-red-500">*</span></label>
          <input value={form.email} onChange={e => set('email', e.target.value)} className="w-full mt-1 p-3 rounded-lg border border-gray-200" placeholder="you@domain.com" required />
        </div>
        <div>
          <label className="text-xs text-popxPurple">Password<span className="text-red-500">*</span></label>
          <input value={form.password} onChange={e => set('password', e.target.value)} type="password" className="w-full mt-1 p-3 rounded-lg border border-gray-200" placeholder="Enter password" required />
        </div>
        <div>
          <label className="text-xs text-popxPurple">Company name</label>
          <input value={form.company} onChange={e => set('company', e.target.value)} className="w-full mt-1 p-3 rounded-lg border border-gray-200" placeholder="Company name" />
        </div>

        <div className="mt-2">
          <div className="text-sm">Are you an Agency?*</div>
          <div className="flex items-center space-x-6 mt-2">
            <label className="inline-flex items-center space-x-2">
              <input type="radio" name="agency" checked={form.agency === 'yes'} onChange={() => set('agency', 'yes')} />
              <span className="text-sm">Yes</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input type="radio" name="agency" checked={form.agency === 'no'} onChange={() => set('agency', 'no')} />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <button onClick={handleSubmit} className="w-full py-3 rounded-xl bg-popxPurple text-white font-semibold">Create Account</button>
        </div>
      </div>
    </div>
  );
}
