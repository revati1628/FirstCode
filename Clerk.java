package mysqljdbc;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class Clerk extends Demo {
	Clerk()
	{
		
	}
	public void insert() throws ClassNotFoundException, SQLException {
		PreparedStatement ps=conn().prepareStatement("insert into employee values(1,'jimin','clerk',5000,30,null)");
		ps.execute();
		ps.close();
		conn().close();
	}
	
	public void sal() throws ClassNotFoundException, SQLException{
		PreparedStatement ps=conn().prepareStatement(" update employee set sal =? where id=1");
		System.out.println("Salary of clerk is :");
		Statement state=conn().createStatement();
		ResultSet res=state.executeQuery("select * from employee where id=1");
		while(res.next()) {
			System.out.println(res.getInt(5));
		}
		ps.setInt(1, 5000);
		ps.execute();
		ps.close();
		conn().close();
	}
	public void incrementsal() throws ClassNotFoundException, SQLException{
		PreparedStatement ps=conn().prepareStatement(" update employee set incrementsal=? where id=1");
		ps.setInt(1, 8000);
		ps.execute();
		Statement state=conn().createStatement();
		ResultSet res=state.executeQuery("select * from employee where id=1");
		System.out.println("New Salary of clerk is :");
		while(res.next()) {
			System.out.println(res.getInt(6));
		}
		ps.close();
		conn().close();
	}
	public void Details() throws ClassNotFoundException, SQLException {
		Statement state=conn().createStatement();
		ResultSet res=state.executeQuery("select * from employee where id=1");
		System.out.println("id age name   desig  sal incrementsal");
		while(res.next()) {
			System.out.println(res.getInt(1)+ " | " +res.getInt(2)+ "|" +res.getString(3) +" | "+ res.getString(4)+ " | " +res.getInt(5)+ " |" +res.getInt(6));
		}
		conn().close();
	}
	
}


