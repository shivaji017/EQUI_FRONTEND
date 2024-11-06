import React from 'react';
import { 
  Wallet, 
  UsersRound, 
  PiggyBank, 
  BarChart3, 
  UserPlus, 
  Receipt, 
  Target 
} from 'lucide-react';

const Features = () => {
  return (
    <div id="features" className="px-4 md:px-36">
      <div className="flex-col justify-center">
        <div className="flex-row md:flex justify-between">
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <Wallet size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Budget Tracking</h3>
            <p className="text-gray-600">Easily track your income and spending with detailed reports.</p>
          </div>
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <UsersRound size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Expense Splitting</h3>
            <p className="text-gray-600">Share expenses and settle payments with friends effortlessly.</p>
          </div>
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <PiggyBank size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Savings Goals</h3>
            <p className="text-gray-600">Set savings targets and monitor progress towards your financial goals.</p>
          </div>
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <BarChart3 size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            <p className="text-gray-600">Gain insights into your spending habits with detailed analytics.</p>
          </div>
        </div>
        <div className="flex-row md:flex justify-between">
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <UserPlus size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Create an Account</h3>
            <p className="text-gray-600">Get started by creating your account in a few easy steps.</p>
          </div>
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <Receipt size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Track Expenses</h3>
            <p className="text-gray-600">Record your expenses and stay on top of your finances.</p>
          </div>
          <div className="text-center py-4 h-64">
            <div className="mx-auto mb-4 h-16 flex items-center justify-center">
              <Target size={48} className="text-black-600" />
            </div>
            <h3 className="text-xl font-semibold">Achieve Your Goals</h3>
            <p className="text-gray-600">Work towards your financial goals and see real progress.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;