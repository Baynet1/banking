import TotalBalanceBox from '@/components/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox';

const Home = () => {
  const loggedIn = {firstName: 'Andrew'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={780.98}
          />
        </header>
      </div>
    </section>
  )
}

export default Home