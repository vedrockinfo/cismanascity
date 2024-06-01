using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
public partial class index : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }


    public virtual int Insert()
    {
        cls_connection Mycon = new cls_connection();
        try
        {
            Mycon.cmd.Parameters.Clear();
            Mycon.cmd.Connection = Mycon.con;
            Mycon.cmd.CommandText = "Proc_tblSummerRegistration_Insert";
            Mycon.cmd.CommandType = CommandType.StoredProcedure;
            //Mycon.cmd.Parameters.AddWithValue("@RegistrationId", prp.RegistrationId);
            Mycon.cmd.Parameters.AddWithValue("@Class", txtClass.Text);
            Mycon.cmd.Parameters.AddWithValue("@Age", txtAge.Text);
            Mycon.cmd.Parameters.AddWithValue("@Name", txtName.Text);
            Mycon.cmd.Parameters.AddWithValue("@School", txtSchool.Text);
            Mycon.cmd.Parameters.AddWithValue("@Pname", txtPname.Text);
            Mycon.cmd.Parameters.AddWithValue("@Email", txtEmail.Text);
            Mycon.cmd.Parameters.AddWithValue("@Address", txtAddress.Text);
            Mycon.cmd.Parameters.AddWithValue("@ContactNo", txtContactNo.Text);
            Mycon.cmd.Parameters.AddWithValue("@Date", txtDate.Text);
            SqlParameter p1 = new SqlParameter("@RegistrationId", SqlDbType.VarChar, 6);
            Mycon.cmd.Parameters.Add(p1);
            p1.Direction = ParameterDirection.InputOutput;
            Mycon.open();
            int cnt = Mycon.cmd.ExecuteNonQuery();
            string strjobId = Mycon.cmd.Parameters["@RegistrationId"].Value.ToString();
            reset();
            lblmsg.Text = "Your record saved Successfully.Your Reference Id: " + strjobId;
            reset();
            return cnt;
        }
        catch (Exception ex)
        {
            return 0;
        }
        finally
        {
            Mycon.close();
        }
    }

    private void reset()
    {
        txtAddress.Text = "";
        txtAge.Text = "";
        txtClass.Text = "";
        txtContactNo.Text = "";
        txtDate.Text = "";
        txtEmail.Text = "";
        txtName.Text = "";
        txtPname.Text = "";
        txtSchool.Text = "";


    }

    protected void btnsubmit_Click(object sender, EventArgs e)
    {
        Insert();
    }
}