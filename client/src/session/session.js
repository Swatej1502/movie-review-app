var Session = (function() {
    var role = false;
    var mid = null;
    var verif=true;
    var msg=false;
    var getmid = function() {
      return mid;   
    };
  
    var getrole = function() {
      return role;  
    };
  
    var setrole = function(userrole) {
      role = userrole;     
    };
    var setmid = function(m_id) {
      mid = m_id;     
    };
    var getverif = function() {
      return verif;  
    };
  
    var setverif = function(n) {
      verif = n;     
    };
    var getmsg = function() {
      return msg;  
    };
  
    var setmsg = function(n) {
      msg = n;     
    };
  
    return {
      getrole: getrole,
      setrole: setrole,
      getmid: getmid,
      setmid: setmid,
      getverif:getverif,
      setverif:setverif,
      getmsg:getmsg,
      setmsg:setmsg
    }
  
  })();
  
  export default Session;