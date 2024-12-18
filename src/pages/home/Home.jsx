import React from "react";
import Post from "../../components/header/post/Post";

const Home = () => {
  return (
    <div className="py-8">
      <img
        src="https://s3-us-west-2.amazonaws.com/leadspedia-logo/ff270955fa1f4a6252b4f507db609d12.png"
        alt=""
        className=" h-[50px] w-[200px] object-cover"
      />

      <div className=" px-[10px] mt-5 pt-2 gap-4 mb-8">
        <h1 className="section-heading">
          How to Post Legal - Depo Provera Leads to NIB Direct
        </h1>
        <p className="section-sub-heading">
          These instructions describe how to post leads to and understand what
          to expect in response.
        </p>
      </div>

      <div className="bg-white mb-8 mx-[10px]">
        <div className="">
          <h2 className="section-heading">Direct Post</h2>
        </div>
        <div className="  overflow-x-auto">
          <table className=" w-full border border-border-color">
            <tr className=" border-b border-border-color">
              <td className=" w-[20%] p-2 text-sm font-semibold text-primary capitalize border-r border-border-color">
                Post URL
              </td>
              <td className="p-2  text-sm  text-primary">
                https://nationalinjurybureau.leadspediatrack.com/post.do
              </td>
            </tr>
            <tr>
              <td className=" w-[20%] p-2 text-sm font-semibold text-primary capitalize border-r border-border-color">
                Request Method
              </td>
              <td className="p-2  text-sm  text-primary">
                POST or GET are supported. We strongly recommend using POST.
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="bg-white px-[10px] mb-8 pt-2">
        <div className="">
          <h2 className="section-heading">Posting Fields</h2>
        </div>
        <br />
        <div className=" w-full">
          <div className="overflow-x-auto">
            <table className="min-w-full  border border-border-color">
              <thead className="bg-secondary ">
                <tr className="  border-b border-border-color ">
                  <th className="p-2 text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    #
                  </th>
                  <th className="p-2 text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Field
                  </th>
                  <th className="p-2 text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Required
                  </th>
                  <th className="p-2 text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Data Type
                  </th>
                  <th className="p-2 text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="">
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    1
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color ">
                    lp_campaign_id
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    Yes
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    String
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    Provided to you by NIB Direct
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    2
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    lp_campaign_key
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    Yes
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    String
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    Provided to you by NIB Direct
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white px-[10px]  pt-2 mb-8">
        <div className="">
          <h2 className="section-heading">TCPA Compliance</h2>
        </div>
        <div className="">
          <p className="mb-[10px] text-lg  text-primary leading-[1.1] font-semibold">
            jornaya_lead_id OR trusted_form_cert_id is required
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full  border border-border-color">
              <thead className="bg-secondary ">
                <tr>
                  <th className="p-2 text-left w-[5%] text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    #
                  </th>
                  <th className="p-2 text-left  text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Field
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    1
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    jornaya_lead_id
                  </td>
                </tr>
                <tr>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    2
                  </td>
                  <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                    trusted_form_cert_id
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="bg-white  pt-2 px-[10px] mb-8">
        <div className=" ">
          <h2 className="section-heading">List Values</h2>
        </div>
        <div className="">
          <p className="section-sub-heading">
            When posting leads, make sure you post the list value.
          </p>
          <br />
          <div className="">
            <div>
              <strong className="text-primary text-[13px] mb-4">
                Diagnosed
              </strong>
              <br />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border-color">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="p-2 w-[5%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        #
                      </th>
                      <th className="p-2 text-left w-[45%] text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Label
                      </th>
                      <th className="p-2 text-left w-[45%] text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2  whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        1
                      </td>
                      <td className="p-2  whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Brain Cyst
                      </td>
                      <td className="p-2  whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Brain Cyst
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        2
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Brain Tumor
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Brain Tumor
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <br />
          <div className="">
            <div>
              <strong className="text-primary text-[13px] mb-4">
                Product Name
              </strong>
              <br />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border-color">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="p-2 w-[5%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        #
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Label
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        1
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Depo-Provera
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Depo-SubQ Provera
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        2
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Depo-Provera
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        Depo-Provera
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div>
              <strong className="text-primary text-[13px] mb-4">
                Attorney
              </strong>
              <br />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border-color">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="p-2 w-[5%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        #
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Label
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        1
                      </td>
                      <td className="p-2 whitespace-nowrap capitalize text-xs text-primary leading-[1.4] border-r border-border-color">
                        no
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs capitalize text-primary leading-[1.4] border-r border-border-color">
                        No
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        2
                      </td>
                      <td className="p-2 capitalize whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        yes
                      </td>
                      <td className="p-2 capitalize whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        yes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <div>
              <strong className="text-primary text-[13px] mb-4">
                Use Product
              </strong>
              <br />
              <br />
              <div className="overflow-x-auto">
                <table className="min-w-full border border-border-color">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="p-2 w-[5%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        #
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Label
                      </th>
                      <th className="p-2 w-[45%] text-left text-xs border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        1
                      </td>
                      <td className="p-2 whitespace-nowrap capitalize text-xs text-primary leading-[1.4] border-r border-border-color">
                        no
                      </td>
                      <td className="p-2 whitespace-nowrap text-xs capitalize text-primary leading-[1.4] border-r border-border-color">
                        No
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        2
                      </td>
                      <td className="p-2 capitalize whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        yes
                      </td>
                      <td className="p-2 capitalize whitespace-nowrap text-xs text-primary leading-[1.4] border-r border-border-color">
                        yes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white  pt-2 px-[10px] mb-8">
        <div className="">
          <h2 className="section-heading">Posting Tests</h2>
        </div>
        <div className="">
          <p className="section-sub-heading">
            There are multiple ways to post a test lead. You can either post:
          </p>
          <ul className=" list-disc  text-primary pl-8 text-[13px] leading-[1.4]">
            <li>
              <span className=" font-semibold">test</span> in the first name or
              last name field; or
            </li>
            <li>
              <span className=" font-semibold">1</span> in the{" "}
              <span className=" font-semibold">lp_test</span> field
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white  pt-2 px-[10px] mb-8">
        <div className="">
          <h2 className="section-heading">Post Responses</h2>
        </div>
        <div className="">
          <p className="section-sub-heading">
            When a lead is posted, you will get a real-time response. The
            default response is in XML format; You can request the response to
            be JSON if you pass json in lp_response field.
          </p>
          <div className="space-y-4 mt-3">
            <div c className=" w-full overflow-x-auto">
              <table className=" w-full border border-border-color">
                <tr className=" border-b border-border-color">
                  <td className="p-2  w-[10%]  align-top  mt-0 flex justify-start items-start text-left text-xs !border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Success
                  </td>
                  <td className="p-2  text-left text-xs border-l border-border-color   capitalize tracking-wider leading-[1.4]">
                    <pre className=" rounded-lg overflow-x-auto ">
                      <code className="text-[13px] lowercase">
                        <span className=" lowercase text-black font-semibold">
                          &lt;response&gt;
                        </span>
                        <br />
                        <span className=" lowercase font-semibold">
                          &nbsp;&nbsp;&lt;result&gt;
                          <span className=" text-primary font-medium">
                            success
                          </span>
                          &lt;/result&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;lead_id&gt;
                          <span className=" font-medium text-primary uppercase">
                            0UTNS5ND
                          </span>
                          &lt;/lead_id&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;price&gt;
                          <span className="text-primary font-medium">
                            15.00
                          </span>
                          &lt;/price&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;redirect_url&gt;
                          <span className="text-primary font-medium">
                            http://www.example.com/
                          </span>
                          &lt;/redirect_url&gt;
                        </span>
                        <br />
                        <span className="  font-semibold">
                          &nbsp;&nbsp;&lt;msg&gt;
                          <span className="text-primary font-medium capitalize">
                            Lead Accepted
                          </span>
                          &lt;/msg&gt;
                        </span>
                        <br />
                        <span className="font-semibold">&lt;/response&gt;</span>
                      </code>
                    </pre>
                  </td>
                </tr>
                <tr className="">
                  <td className="p-2  w-[10%]  align-top  mt-0 flex justify-start items-start text-left text-xs !border-r border-border-color font-bold text-primary capitalize tracking-wider leading-[1.4]">
                    Failure
                  </td>
                  <td className="p-2  text-left text-xs border-l border-border-color   capitalize tracking-wider leading-[1.4]">
                    <pre className=" rounded-lg overflow-x-auto ">
                      <code className="text-[13px] lowercase">
                        <span className=" lowercase text-black font-semibold">
                          &lt;response&gt;
                        </span>
                        <br />
                        <span className=" lowercase font-semibold">
                          &nbsp;&nbsp;&lt;result&gt;
                          <span className=" text-primary font-medium">
                            failed
                          </span>
                          &lt;/result&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;lead_id&gt;
                          <span className=" font-medium text-primary uppercase">
                            YZDRPBC7
                          </span>
                          &lt;/lead_id&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;price&gt;
                          <span className="text-primary font-medium">
                            00.00
                          </span>
                          &lt;/price&gt;
                        </span>
                        <br />
                        <span className=" font-semibold">
                          &nbsp;&nbsp;&lt;redirect_url&gt;
                          <span className="text-primary font-medium">
                            http://www.example.com/
                          </span>
                          &lt;/redirect_url&gt;
                        </span>
                        <br />
                        <span className="  font-semibold">
                          &nbsp;&nbsp;&lt;msg&gt;
                          <span className="text-primary font-medium capitalize">
                            Lead Rejected
                          </span>
                          &lt;/msg&gt;
                        </span>
                        <br />
                        <span>
                          <span className=" font-semibold">&nbsp;&nbsp;&lt;errors&gt;</span>
                          <br />
                         <span className=" font-semibold"> &nbsp;&nbsp;&nbsp;&nbsp;&lt;error&gt;<span className="  capitalize font-medium text-primary">No Match</span>&lt;/error&gt;</span>
                          <br />
                         <span className=" font-semibold"> &nbsp;&nbsp;&lt;/errors&gt;</span>
                          <br />
                        </span>
                        <span className="font-semibold">&lt;/response&gt;</span>
                       
                      </code>
                    </pre>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
